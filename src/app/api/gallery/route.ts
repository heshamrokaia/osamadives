import { NextResponse } from 'next/server';
import {
  galleryPhotos,
  getFeaturedPhotos,
  getPhotosByCategory,
  getCategories,
  categoryLabels,
  FACEBOOK_PAGE_URL,
  type GalleryPhoto
} from '@/lib/gallery-config';

/**
 * Gallery API Route
 *
 * GET /api/gallery - Returns all gallery photos with optional filtering
 *
 * Query Parameters:
 * - featured=true - Return only featured photos
 * - category=diving|underwater|marine-life|dive-sites|training|adventures
 * - limit=number - Limit the number of results
 *
 * FUTURE FACEBOOK INTEGRATION:
 * This route is designed to support future Facebook Graph API integration.
 * When Facebook approves access to page photos, implement the fetchFromFacebook()
 * function below to automatically sync photos from facebook.com/osamasharks
 *
 * To enable Facebook sync:
 * 1. Create a Facebook Developer App
 * 2. Get Page Access Token with pages_read_content permission
 * 3. Set FACEBOOK_ACCESS_TOKEN and FACEBOOK_PAGE_ID environment variables
 * 4. Implement the fetchFromFacebook() function
 * 5. Add POST /api/gallery/sync endpoint to trigger manual sync
 */

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const category = searchParams.get('category') as GalleryPhoto['category'] | null;
    const limit = searchParams.get('limit');

    let photos: GalleryPhoto[] = galleryPhotos;

    // Filter by featured
    if (featured === 'true') {
      photos = getFeaturedPhotos();
    }

    // Filter by category
    if (category && ['diving', 'underwater', 'marine-life', 'dive-sites', 'training', 'adventures'].includes(category)) {
      photos = getPhotosByCategory(category);
    }

    // Apply limit
    if (limit) {
      const limitNum = parseInt(limit, 10);
      if (!isNaN(limitNum) && limitNum > 0) {
        photos = photos.slice(0, limitNum);
      }
    }

    return NextResponse.json({
      success: true,
      count: photos.length,
      total: galleryPhotos.length,
      categories: getCategories(),
      categoryLabels,
      facebookPageUrl: FACEBOOK_PAGE_URL,
      photos
    });
  } catch (error) {
    console.error('Gallery API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch gallery photos' },
      { status: 500 }
    );
  }
}

/**
 * FUTURE: Facebook Graph API Integration
 *
 * Uncomment and implement when Facebook approves page photo access
 *
 * async function fetchFromFacebook(): Promise<GalleryPhoto[]> {
 *   const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
 *   const pageId = process.env.FACEBOOK_PAGE_ID || 'osamasharks';
 *
 *   if (!accessToken) {
 *     throw new Error('Facebook access token not configured');
 *   }
 *
 *   const response = await fetch(
 *     `https://graph.facebook.com/v18.0/${pageId}/photos?fields=id,name,images,created_time&access_token=${accessToken}`
 *   );
 *
 *   if (!response.ok) {
 *     throw new Error('Failed to fetch from Facebook');
 *   }
 *
 *   const data = await response.json();
 *
 *   return data.data.map((photo: any) => ({
 *     id: `fb-${photo.id}`,
 *     src: photo.images[0]?.source || '',
 *     alt: photo.name || 'Photo from Osama\'s Facebook',
 *     title: photo.name || 'Diving Adventure',
 *     date: photo.created_time,
 *     category: 'diving' as const,
 *     tags: ['facebook', 'auto-sync']
 *   }));
 * }
 */

/**
 * FUTURE: POST endpoint for manual Facebook sync
 *
 * export async function POST(request: Request) {
 *   try {
 *     const facebookPhotos = await fetchFromFacebook();
 *     // Merge with existing photos, avoiding duplicates
 *     // Save to database or cache
 *     return NextResponse.json({
 *       success: true,
 *       synced: facebookPhotos.length
 *     });
 *   } catch (error) {
 *     return NextResponse.json(
 *       { success: false, error: 'Facebook sync failed' },
 *       { status: 500 }
 *     );
 *   }
 * }
 */

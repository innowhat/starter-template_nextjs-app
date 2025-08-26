import siteData from '@/data/siteData.json';

export async function GET() {
    return new Response(JSON.stringify(siteData.pages.about, null, 2), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

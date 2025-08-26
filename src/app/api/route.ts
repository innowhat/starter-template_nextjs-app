import siteData from '@/data/siteData.json';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || 'World';

    return new Response(
        JSON.stringify({
            message: `Hello, ${name}! Welcome to the ${siteData.metaData.openGraph.siteName} API.`,
        }),
        {
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );
}

import { NextResponse } from 'next/server';

const INDEXNOW_KEY = 'f100faa71117909fb25821d4a5cadb23';
const HOST = 'aenfinite.com';

export async function POST(request: Request) {
  try {
    const { urlList } = await request.json();

    if (!urlList || !Array.isArray(urlList) || urlList.length === 0) {
      return NextResponse.json({ error: 'urlList array is required' }, { status: 400 });
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: urlList,
    };

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('IndexNow API Error:', errorText);
      return NextResponse.json({ error: 'Failed to submit to IndexNow', details: errorText }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: `Successfully submitted ${urlList.length} URLs to IndexNow.` });

  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

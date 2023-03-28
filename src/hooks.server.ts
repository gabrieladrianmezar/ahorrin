import { SvelteKitAuth } from '@auth/sveltekit';
import Discord from '@auth/core/providers/discord';
import { DISCORD_ID, DISCORD_SECRET, DISCORD_URL } from '$env/static/private';

// import GitHub from '@auth/core/providers/github';
// import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

import { createContext } from '$lib/trpc/context';
import { router } from '$lib/trpc/router';
import { createTRPCHandle } from 'trpc-sveltekit';

import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const authHandle = SvelteKitAuth({
	// providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
	providers: [Discord({ clientId: DISCORD_ID, clientSecret: DISCORD_SECRET })],
	//secret: event.platform.env.AUTH_SECRET,
	//trustHost: true,
});

const trpcHandle: Handle = createTRPCHandle({ router, createContext });

export const handle = sequence(authHandle, trpcHandle);

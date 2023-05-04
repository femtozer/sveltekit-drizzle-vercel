import { connection } from '$lib/db/connection.server';
import { todosTable } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		todos: await connection.select().from(todosTable)
	};
}) satisfies PageServerLoad;

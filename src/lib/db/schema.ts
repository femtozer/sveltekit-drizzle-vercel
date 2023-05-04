import type { InferModel } from 'drizzle-orm';
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const todosTable = pgTable('todos', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	description: text('description').notNull(),
	priority: text('priority', { enum: ['HIGH', 'LOW', 'MEDIUM'] })
		.default('LOW')
		.notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export type Todo = InferModel<typeof todosTable>;

import z from "zod";

export const createTaskSchema = z.object({
  title: z.string().max(20),
  body: z.string().min(5),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;

export const updateTaskSchema = z.object({
  taskId: z.string().cuid(),
  title: z.string().max(20),
  body: z.string().min(5),
});

export type updateTaskInput = z.infer<typeof updateTaskSchema>;

export const getSngleTaskSchema = z.object({
  taskId: z.string().cuid(),
});

export const deleteTaskSchema = z.object({
  taskId: z.string().cuid(),
});

import { test } from "vitest";
import prisma from "../../features/prisma";

test("Prisma test", async (ctx) => {
  ctx.expect(await prisma.placeholder.count({ where: { id: 0 } })).toBe(0);
});

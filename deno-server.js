import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { Hono } from "https://deno.land/x/hono@v2.0.9/mod.ts"
import { serveStatic } from "https://deno.land/x/hono@v2.3.1/middleware.ts"
import app from './dist/app.js';

const server = new Hono();

server.route("/", app);

server.use('/assets/*', serveStatic({ root: './dist/' }));

serve(server.fetch);
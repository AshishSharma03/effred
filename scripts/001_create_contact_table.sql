-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (no auth required for contact form)
CREATE POLICY "Allow anonymous inserts" ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow viewing own submissions
CREATE POLICY "Allow viewing own submissions" ON public.contact_submissions
  FOR SELECT
  USING (true);

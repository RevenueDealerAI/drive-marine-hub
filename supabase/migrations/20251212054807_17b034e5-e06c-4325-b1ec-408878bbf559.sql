-- Create table for quote requests
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  vin TEXT,
  year TEXT,
  make TEXT,
  model TEXT,
  part_type TEXT,
  message TEXT,
  source_page TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit a quote request"
ON public.quote_requests
FOR INSERT
WITH CHECK (true);

-- Only authenticated admins could view (we'll add admin access later if needed)
-- For now, no one can read via client - data is only accessible via dashboard
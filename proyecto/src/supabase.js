import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tatmsavgjzgnussuragi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhdG1zYXZnanpnbnVzc3VyYWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MDg2NjEsImV4cCI6MjA2Mzk4NDY2MX0.PQf4CNoI5VSPa3MrlAyh4mAZRsQnlsDcEF8WfIoxKqEe';
export const supabase = createClient(supabaseUrl, supabaseKey);
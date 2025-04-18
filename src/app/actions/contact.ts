'use server'

import { supabase } from '@/lib/supabase'

interface ContactFormData {
  name: string
  email: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const { error } = await supabase
      .from('messages')
      .insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
          created_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.warn('Error submitting contact form to Supabase:', error)
      return { success: false, error: 'Failed to submit message' }
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit message' }
  }
} 
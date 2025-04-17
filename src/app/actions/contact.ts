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
      throw new Error(error.message)
    }

    return { success: true }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: 'Failed to submit message' }
  }
} 

import ContactForm from '@/components/ContactForm'
import Seo from '@/components/Seo'
import { useEffect } from 'react'

export default function Contact () {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Seo title='Contact' />
      <main>
        <ContactForm />
      </main>

    </>
  )
}

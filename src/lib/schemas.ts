import * as z from 'zod'

const FormSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.',
  }),
  email: z.string().email(),
  message: z
    .string()
    .min(10, {
      message: 'The message must be at least 10 characters.',
    })
    .max(100, {
      message: 'The message must be no more than 100 characterså.',
    }),
})

export { FormSchema }

import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { data } = useSuspenseQuery({
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 2000))
      return [1, 2, 3]
    },
    queryKey: ['slow-query'],
  })
  console.log(data);
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
    </div>
  )
}

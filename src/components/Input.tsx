export function Input({
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input 
      className="border border-[--gray-700] rounded bg-[--gray-500] placeholder:text-[--gray-300] pl-4 pr-52 text-start text-[--gray-200]" 
      placeholder="Adicone uma nova tarefa"
      {...rest}
    />
  )
}
import { ButtonLink } from './style'

type Props = {
  to: string
  children: string
}

const Button = ({ to, children }: Props) => {
  return <ButtonLink to={to}>{children}</ButtonLink>
}

export default Button

export type OperationLogType = {
  description: string,
  operatedAt: string,
}

type Props = {
  description: string
  operatedAt: string
}

const OperationLog = ({ description, operatedAt }: Props) => {
  return (
    <tr>
      <td>{description}</td>
      <td>{operatedAt}</td>
    </tr>
  )
}

export default OperationLog

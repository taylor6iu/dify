import Container from './Container'
import { brandConfig } from '@/config/brand'

const AppList = async () => {
  return <Container />
}

export const metadata = {
  title: `Datasets - ${brandConfig.name}`,
}

export default AppList

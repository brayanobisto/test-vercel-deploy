import { HomeScreen } from 'app/features/home/screen'

export async function getServerSideProps() {
  return {
    props: {
      test:"test"
    }, 
  }
}

export default HomeScreen

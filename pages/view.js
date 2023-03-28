import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import Custom from '../components/custom'
import Header from '../components/header'

const navigation = [
  { name: 'Dashboard', href: '/', current: false },
  { name: 'Issue Certificate', href: '/issue', current: false },
  { name: 'Upload Document', href: '/upload', current: false },
]

export default function View({ response }) {
  console.log(response)

  return (
    <div>
      <Custom title={'Document Info'} />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Header nav={navigation} />
        <div className="mx-auto max-w-xl h-auto bg-white rounded-lg border border-gray-200 shadow-md ">
          <div className="flex flex-col items-center p-10">
            <h1 className="my-4">Kerala Blockchain Academy</h1>
            <span className="text-lg text-gray-500 ">
              Document(s) concerning
            </span>
            <h3 className="my-4 text-2xl font-medium text-gray-900 ">
              Certificate ID: {response.id}
            </h3>
            <span className="text-lg text-gray-500 ">
              is uploaded in IPFS with CID
            </span>
            <h3 className="my-4 text-lg font-medium text-gray-900 ">
              {response.path}
            </h3>
            <Link href={`http://127.0.0.1:8080/ipfs/${response.path}`}>
              <a target="_blank">
                <button
                  type="button"
                  className="bg-[#6ACAD1] hover:bg-[#469EA2] hover:text-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center my-4"
                >
                  View on IPFS&ensp;
                  <Image
                    src="/ipfs.svg"
                    alt="ipfs-logo"
                    height="25"
                    width="25"
                  />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let id = context.query.id
  const response = await fetch(`http://localhost:3000/api/document?id=${id}`)
  return {
    props: { response: await response.json() },
  }
}

import { getDocuments } from "@/lib/doc"
import { getDocumentsByAuthor, getDocumentsByTag } from "@/utils/doc-utils"
import ContentDisplay from "@/app/components/ContentDisplay"

const AuthorPage = ({params: {name}}) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByAuthor(docs, name)
  return (
    <ContentDisplay id={matchedDocs[0].id}/>
  )
}

export default AuthorPage
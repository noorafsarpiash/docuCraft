import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc"
import { getDocumentContent } from "@/lib/doc"

import { getDocumentsByCategory } from "@/utils/doc-utils";
const Categoriespage = ({params: {name}}) => {
  const docs = getDocuments();
  const matchedDocs = getDocumentsByCategory(docs, name)
  return (
   <ContentDisplay id={matchedDocs[0].id}/>
  )
}

export default Categoriespage
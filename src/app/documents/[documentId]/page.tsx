interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      {documentId}
      ok
    </div>
  );
};

export default DocumentIdPage;

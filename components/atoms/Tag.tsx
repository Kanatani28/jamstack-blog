const Tag = ({ tag }: { tag: { name: string } }): JSX.Element => (
  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
    {`#${tag.name}`}
  </span>
);

export default Tag;
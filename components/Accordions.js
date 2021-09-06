import Accordion from '@/components/Accordion'
export const Accordions = ({ data }) => {
  return (
    <div className="pb-5">
      {data.map((block) => (
        <Accordion key={block.title} posts={block.data} titleAccordion={block.title} />
      ))}
    </div>
  )
}

export default Accordions

export function SectionTitle({children,down=false}:{children:React.ReactNode;down?:boolean}){return <h2 className="section-title mb-4">{down?'▼':'▲'} {children}</h2>}

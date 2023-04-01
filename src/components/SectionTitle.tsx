const SectionTitle = ({title, name, centerMode, darkMode}: { title: string, name?: string, centerMode?: boolean, darkMode?: boolean}) => {
    return (
        <div className={`space-y-2 ${centerMode ? 'flex flex-col items-center justify-center':''} ${darkMode ? 'text-white':''}`}>
            {name && <span className='text-primary '>{name}</span>}
            <h2 className={`text-4xl serif font-bold border-0 border-l-[6px] border-solid border-l-primary px-3`}>{title}</h2>
        </div>
    )
}
export default SectionTitle;
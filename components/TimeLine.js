/**
 * Create a function reduce array objects with same year in a single object
 */

const groupByYear = (array) => {
  return array.reduce((acc, event) => {
    const year = event.year
    if (!acc[year]) {
      acc[year] = [event]
    } else {
      acc[year].push(event)
    }
    return acc
  }, {})
}

const data = [
  {
    year: '1989',
    title: 'Nazco a principios de año',
    content: 'Hacía mucho mucho frío en Salamanca',
    direction: 'left',
  },
  {
    year: '1996',
    title: 'Mi primera vez en internet',
    content: 'Utilizando el navegador Netscape',
    direction: 'right',
  },
  {
    year: '2007',
    title: 'Primera cámara reflex',
    content: 'La Canon EOS 350D me acompañará en muchas aventuras',
    direction: 'right',
  },
  {
    year: '2011',
    title: 'Me voy a vivir a Roma',
    content: 'Viajo a Italia para acabar Derecho en la Università di Roma Tre',
    direction: 'left',
  },
  {
    year: '2012',
    title: 'Mi primer smartphone',
    content: 'Me compro en ebay un iPhone 4',
    direction: 'right',
  },
  {
    year: '2012',
    title: 'Licenciatura en Derecho',
    content: 'Acabo la carrera de Derecho en la USAL',
    direction: 'left',
  },
  {
    year: '2013',
    title: 'Primera cámara reflex analógica',
    content: 'Empiezo en el mundo analógico con una Canon 50E',
    direction: 'right',
  },
  {
    year: '2017',
    title: 'Frontend Junior',
    content: 'Empiezo a trabajar en Yowi.tv',
    direction: 'right',
  },
  {
    year: '2018',
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    content: 'Acabo el módulo Desarrollo de Aplicaciones Multiplataforma en Ilerna Online',
    direction: 'left',
  },
  {
    year: '2019',
    title: 'Empiezo el Máster de Aplicaciones Web',
    content: 'Comienzo el segundo semestre del año en la UOC',
    direction: 'left',
  },
  {
    year: '2020',
    title: 'Frontend Developer',
    content: 'Empiezo a trabajar para Iberdrola en Everis',
    direction: 'right',
  },
  {
    year: '2021',
    title: 'Frontend Mid Developer',
    content: 'Empiezo a trabajar para Inditex en Minsait ',
    direction: 'right',
  },
]

const eventsData = Object.values(groupByYear(data))

const Bars = () => {
  return (
    <div className="h-full w-4 flex items-center justify-center">
      <div className="h-full w-1 bg-primary-200 dark:bg-gray-700 pointer-events-none"></div>
    </div>
  )
}

const Points = () => {
  return (
    <div className="w-4 h-4 absolute top-1/2 -mt-3 bg-primary-200 text-primary-600 shadow-lg dark:bg-gray-800 p-1 rounded-full"></div>
  )
}

const EventTitle = ({ title = '' }) => {
  return (
    <h4 className="font-semibold text-md mb-1 text-primary-600 dark:text-primary-500">{title}</h4>
  )
}

const EventContent = ({ content = '' }) => {
  return (
    <p className="leading-tight text-justify text-primary-500 dark:text-gray-500 text-sm">
      {content}
    </p>
  )
}

const LeftBlock = ({ ...rest }) => {
  const { title, content } = rest
  return (
    <div className="flex flex-row-reverse md:contents">
      <div className="bg-primary-100 dark:bg-gray-800 col-start-1 col-end-5 py-2 px-4 rounded-xl my-1 mr-auto md:ml-auto md:mr-0">
        <EventTitle title={title} />
        <EventContent content={content} />
      </div>
      <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
        <Bars />
        <Points />
      </div>
    </div>
  )
}

const RightBlock = ({ ...rest }) => {
  const { title, content } = rest
  return (
    <div className="flex md:contents">
      <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
        <Bars />
        <Points />
      </div>
      <div className="bg-primary-100 dark:bg-gray-800 col-start-6 col-end-10 py-2 px-4 rounded-xl my-1 mr-auto">
        <EventTitle title={title} />
        <EventContent content={content} />
      </div>
    </div>
  )
}

const TimeLine = () => {
  return (
    <div className="py-10">
      {eventsData.map((events, index) => {
        const year = events[0].year
        return (
          <div className="container " key={index}>
            <div className="flex md:justify-center">
              <div className="p-2 md:text-center rounded-lg font-semibold bg-primary-200 text-primary-600 dark:bg-gray-800 dark:text-gray-400">
                {year}
              </div>
            </div>
            <div className="flex flex-col px-3 md:grid grid-cols-9">
              {events.map((event, i) => {
                if (event.direction === 'left') {
                  return <LeftBlock key={i} title={event.title} content={event.content} />
                } else {
                  return <RightBlock key={i} title={event.title} content={event.content} />
                }
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TimeLine

import {Component} from 'react'

import './index.css'

// import CalenderDates from '../CalenderDates'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const DatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

function getDayAbbreviation(date) {
  switch (date % 7) {
    case 1:
      return 'Sun'
    case 2:
      return 'Mon'
    case 3:
      return 'Tue'
    case 4:
      return 'Wed'
    case 5:
      return 'Thu'
    case 6:
      return 'Fri'
    case 7:
      return 'Sat'
    default:
      return '' // Default case, handle if necessary
  }
}

class MonthlyEmojis extends Component {
  state = {
    activeEmoji: emojisList[0].emojiName,
    initialDatesList: DatesList,
    mood: emojisList[0].emojiName,
    day: daysList[0].day,
  }

  onChangeDay = e => {
    this.setState({day: e.target.value})
  }

  onChangeMood = e => {
    this.setState({mood: e.target.value})
  }

  onClickDate = id => {
    const {initialDatesList, activeEmoji} = this.state

    const activeEmojiDetails = emojisList.find(
      emoji => emoji.emojiName === activeEmoji,
    )

    const updatedDatesList = initialDatesList.map(date => {
      if (date.id === id) {
        return {
          ...date,
          emojiUrl: activeEmojiDetails.emojiUrl,
          emojiName: activeEmojiDetails.emojiName,
        }
      }
      return date
    })

    this.setState({initialDatesList: updatedDatesList})
  }

  onClickActiveEmoji = e => {
    this.setState({activeEmoji: e.target.alt})
  }

  daysInMonth = () => (
    <ul className="daysInMonth">
      {daysList.map(day => (
        <li className="day-name" key={day.id}>
          <p key={day.day}>{day.day}</p>
        </li>
      ))}
    </ul>
  )

  calenderDates = () => {
    const {initialDatesList} = this.state
    return (
      <ul className="calender-dates">
        {initialDatesList.map(date => (
          // <CalenderDates details={date} />
          <li
            key={date.id}
            className="date"
            onClick={() => this.onClickDate(date.id)}
          >
            <button type="button" className="date-button">
              {date.date}
            </button>
            {date.emojiUrl ? (
              <img
                className="date-emoji"
                src={date.emojiUrl}
                alt={date.emojiName}
              />
            ) : (
              ''
            )}
          </li>
        ))}
      </ul>
    )
  }

  emojisContainer = () => {
    const {activeEmoji} = this.state

    return (
      <ul className="operations">
        {emojisList.map(emoji => (
          <li className="emoji" key={emoji.id}>
            <button className="button emoji-name" type="button">
              {emoji.emojiName}
            </button>
            <img
              className={`${
                activeEmoji === emoji.emojiName ? 'active-emoji' : 'emoji-img'
              }`}
              onClick={this.onClickActiveEmoji}
              src={emoji.emojiUrl}
              alt={emoji.emojiName}
            />
          </li>
        ))}
      </ul>
    )
  }

  dashboard = () => (
    <div>
      <select className="select-day" onChange={this.onChangeMood}>
        {emojisList.map(emoji => (
          <option key={emoji.id} value={emoji.emojiName} className="day-option">
            {emoji.emojiName}
          </option>
        ))}
      </select>
      <select className="select-day" onChange={this.onChangeDay}>
        {daysList.map(day => (
          <option key={day.id} value={day.day} className="day-option">
            {day.day}
          </option>
        ))}
      </select>
    </div>
  )

  render() {
    const {initialDatesList, mood, day} = this.state
    const filteredList = initialDatesList.filter(
      list =>
        list.emojiName === mood &&
        getDayAbbreviation(parseInt(list.date)) === day,
    )
    console.log(filteredList)
    const count =
      filteredList.length > 9 ? filteredList.length : `0${filteredList.length}`

    return (
      <div className="MainContainer">
        <h1 className="heading">Monthly Emojis</h1>
        <div className="container">
          <div className="CalenderContainer">
            <h1 className="month-title">January</h1>
            {this.daysInMonth()}
            {this.calenderDates()}
          </div>
          <div className="OperationsContainer">
            {this.emojisContainer()}
            <div className="dashboard-operations">
              {this.dashboard()}
              <h1 className="count">{count}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MonthlyEmojis

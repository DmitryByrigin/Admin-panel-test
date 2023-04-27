import { useState } from 'react';
import { formatDate } from 'fullcalendar';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import CalendarStyles from './Calendar.module.sass';

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    <div className="w-full max-w-8xl mx-auto px-4 py-16">
      <header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <div className={`${CalendarStyles.calendar} grid grid-cols-[10%_1fr]`}>
        {/* CALENDAR SIDEBAR */}
        <div>
          <h4 className="text-black">Events</h4>
          <nav>
            {currentEvents.map((event) => (
              <ul key={event.id}>
                {
                  <h4 className="text-deepBlackColor">
                    {formatDate(event.start, {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </h4>
                }
                <li className="overflow-hidden whitespace-pre-line break-all grid grid-cols-1">
                  {event.title}
                </li>
              </ul>
            ))}
          </nav>
        </div>

        {/* CALENDAR */}
        <div>
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={
              [
                // {
                //   id: '12315',
                //   title: 'All-day event',
                //   date: '2022-09-14',
                // },
                // {
                //   id: '5123',
                //   title: 'Timed event',
                //   date: '2022-09-28',
                // },
              ]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;

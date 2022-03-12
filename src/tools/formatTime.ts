import moment, { Dayjs } from 'dayjs';

export const FULL_DATE_FORMAT = 'YYYY-MM-DD hh:mm:ss';

export const SHORT_DATE_FORMAT = 'YYYY-MM-DD';

export const TIME_FORMAT = 'hh:mm:ss';

const formatTime = (formatter = FULL_DATE_FORMAT, time: string | Dayjs | undefined) => moment(time).format(formatter);

export default formatTime;
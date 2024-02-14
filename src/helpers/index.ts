export const date = {
    toString: (date: Date) => {
        let year = date.getFullYear();
        let month = ("0" + date.getMonth()).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        return year + "-" + month + "-" + day
    },
    subtractYears: (numOfYears: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setFullYear(newDate.getFullYear() - numOfYears)
        return newDate
    },
    subtractDays: (numOfDays: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setDate(newDate.getDate() - numOfDays)
        return newDate
    },
    subtractMonths: (numOfMonths: number, date?: Date) => {
        let newDate = date ? date : new Date()
        newDate.setMonth(newDate.getMonth() - numOfMonths)
        return newDate
    },
}


/**
 * This function returns formatted date mm-dd-yy
 *
 * @param date String of correct date
 * @returns It will return the formate of date mm-dd-yy
 */
export const dateFormatter = (date: string) => {
    let currentDate = new Date(date);
    return currentDate.getMonth() + "-" + currentDate.getDate() + "-" + currentDate.getFullYear();
}

/**
 * This function returns unique color for unique id's and same color for same id's
 *
 * @returns It will return the color and repeat the color for repeated keys
 */
export const getColor = () => {
    const colors = ["#FDFEFE", "#FF5733", "#F7DC6F", "#F7DC6F", "#239B56", "#239B56", "#E74C3C", "#E74C3C"];

    const selectedColors: any = {};

    return (key: string) => {
      console.log("selectedColors ==> ", selectedColors)
      if (selectedColors[String(key)]) {
        return selectedColors[String(key)];
      } else {
        selectedColors[String(key)] =
          colors[Object.keys(selectedColors).length];
        return selectedColors[String(key)];
      }
    };
  };

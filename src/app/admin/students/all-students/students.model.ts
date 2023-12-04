
export class Students {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  birtYear: number;
  email: string;
  mobile: string;
  parentsFirstName: string;
  parentsLastName: string;
  parentNo: string;
  parentsEmail: string;
  address: string;

  constructor(students: Students) {
    this.id = students.id;
    this.firstName = students.firstName || '';
    this.lastName = students.lastName || '';
    this.country = students.country || '';
    this.birtYear = students.birtYear ;
    this.email = students.email || '';
    this.mobile = students.mobile || '';
    this.parentsFirstName = students.parentsFirstName || '';
    this.parentsLastName = students.parentsLastName || '';
    this.parentNo = students.parentNo || '';
    this.parentsEmail = students.parentsEmail || '';
    this.address = students.address || '';
  }

  public getRandomID(): number {
    const S4 = () => {
      return ((1 + Math.random()) * 0x10000) | 0;
    };
    return S4() + S4();
  }
}


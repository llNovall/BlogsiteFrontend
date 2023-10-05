import { ICheckboxModel } from "../interfaces/icheckbox-model";

export interface YearCheckboxModel extends ICheckboxModel {
    year: number;
    isChecked: boolean;
}

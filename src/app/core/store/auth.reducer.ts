import { createReducer } from "@ngrx/store";
import{User} from "../../features/auth/models/user.model";

export interface AuthState {

  authUser: User | null;
}

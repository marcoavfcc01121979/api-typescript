import * as mongoose from 'mongoose'
import {newSchema} from '../models/newSchema';

export default mongoose.model("news", newSchema);
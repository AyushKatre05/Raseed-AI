import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema);
// Note: Ensure that you have bcryptjs installed in your project.
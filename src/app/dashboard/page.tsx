import { auth } from 'auth';
import { SignIn, SignOut } from '@/features/authentication/auth-components';

export default async function Dashboard() {
  const session = await auth();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Dashboard</h1>
      {!session?.user ? <SignIn /> : <SignOut />}
    </main>
  );
}

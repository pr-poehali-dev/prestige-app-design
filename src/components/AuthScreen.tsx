import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface AuthScreenProps {
  onAuth: () => void;
}

const AuthScreen = ({ onAuth }: AuthScreenProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth();
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-sand to-white flex flex-col items-center justify-center px-16 animate-fade-in">
      <div className="w-full max-w-[800px] space-y-12">
        <div className="text-center space-y-4">
          <img 
            src="https://cdn.poehali.dev/files/e887635b-a2f7-4004-b355-49ba8c7a3f0d.png" 
            alt="ЖК Престиж" 
            className="w-[500px] h-auto mx-auto mb-8"
          />
          <p className="text-depth/60 text-xl">Жизнь премиум-класса у моря</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-12 rounded-3xl shadow-2xl border border-ocean/10">
          <div className="space-y-3">
            <Label htmlFor="login" className="text-depth font-medium text-xl">
              Логин
            </Label>
            <Input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="border-ocean/20 focus:border-ocean transition-colors h-16 text-lg"
              required
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="password" className="text-depth font-medium text-xl">
              Пароль
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-ocean/20 focus:border-ocean transition-colors h-16 text-lg"
              required
            />
          </div>

          <div className="space-y-4 pt-4">
            <Button 
              type="submit" 
              className="w-full bg-ocean hover:bg-ocean/90 text-white font-semibold py-8 text-xl rounded-2xl transition-all hover:scale-[1.02]"
            >
              Войти
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full border-2 border-ocean text-ocean hover:bg-ocean/5 py-8 text-xl rounded-2xl transition-all"
            >
              Регистрация
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;
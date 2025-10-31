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
    <div className="h-full w-full bg-gradient-to-b from-sand to-white flex flex-col items-center justify-center px-8 animate-fade-in">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <img 
            src="https://cdn.poehali.dev/files/e887635b-a2f7-4004-b355-49ba8c7a3f0d.png" 
            alt="ЖК Престиж" 
            className="w-64 h-auto mx-auto mb-6"
          />
          <p className="text-depth/60 text-sm">Жизнь премиум-класса у моря</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-ocean/10">
          <div className="space-y-2">
            <Label htmlFor="login" className="text-depth font-medium">
              Логин
            </Label>
            <Input
              id="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              className="border-ocean/20 focus:border-ocean transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-depth font-medium">
              Пароль
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-ocean/20 focus:border-ocean transition-colors"
              required
            />
          </div>

          <div className="space-y-3">
            <Button 
              type="submit" 
              className="w-full bg-ocean hover:bg-ocean/90 text-white font-semibold py-6 rounded-xl transition-all hover:scale-[1.02]"
            >
              Войти
            </Button>
            
            <Button 
              type="button"
              variant="outline"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full border-ocean text-ocean hover:bg-ocean/5 py-6 rounded-xl transition-all"
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

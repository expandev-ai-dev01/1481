import { Card } from '@/core/components/Card';
import { Button } from '@/core/components/Button';

/**
 * @page HomePage
 * @summary Welcome page with old money aesthetic
 * @domain public
 * @type landing-page
 * @category public
 */
export const HomePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card variant="elevated" padding="lg" className="max-w-2xl w-full text-center">
        <h1 className="text-5xl font-serif font-bold text-oldMoney-brown mb-4">
          Barbearia Old Money
        </h1>
        <div className="w-24 h-1 bg-oldMoney-gold mx-auto mb-6"></div>
        <p className="text-xl text-oldMoney-darkBrown mb-8 font-sans">
          Sistema de Agendamento Premium
        </p>
        <p className="text-oldMoney-brown mb-8 leading-relaxed">
          Bem-vindo ao nosso sistema de agendamento exclusivo. Aqui você encontra a tradição e
          elegância de uma barbearia clássica combinada com a praticidade moderna.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="primary" size="lg">
            Agendar Horário
          </Button>
          <Button variant="outline" size="lg">
            Nossos Serviços
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;

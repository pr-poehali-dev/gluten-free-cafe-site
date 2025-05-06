
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-50 px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-4 rounded-full">
            <Icon name="Search" className="h-12 w-12 text-amber-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Страница не найдена</h1>
        <p className="text-lg text-gray-600 mb-8">
          Запрашиваемая вами страница не существует или была перемещена.
        </p>
        <Button className="bg-amber-600 hover:bg-amber-700" asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

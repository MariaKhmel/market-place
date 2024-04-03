import css from "./App.module.css";
import { FaFish } from "react-icons/fa";
import { GiMetalBar } from "react-icons/gi";
import { TbBeachOff } from "react-icons/tb";
function App() {
  return (
    <>
      <div className={css.container}>
        <div className={css.watermark}>Vanchik_Claus</div>
        <table className={css.styledTable}>
          <tbody>
            <tr>
              <th colSpan="2">
                <div>
                  Метали&nbsp;
                  <GiMetalBar className={css.icon} size="24" />
                </div>
              </th>
              <th colSpan="2">
                <div>
                  Риба&nbsp;
                  <FaFish className={css.icon} size="24" />
                </div>
              </th>
              <th colSpan="2">
                <div>
                  Пляжні знахідки&nbsp;
                  <TbBeachOff className={css.icon} size="24" />
                </div>
              </th>
            </tr>
            <tr>
              <td>Залізо:</td>
              <td className={css.price}>$63</td>
              <td>Окунь</td>
              <td className={css.price}>$179</td>
              <td>Розбитий телефон</td>
              <td className={css.price}>$2220</td>
            </tr>
            <tr>
              <td>Мідь:</td>
              <td className={css.price}>$273</td>
              <td>Оселедець</td>
              <td className={css.price}>$80</td>
              <td>Золота каблучка</td>
              <td className={css.price}>$3560</td>
            </tr>
            <tr>
              <td>Срібло:</td>
              <td className={css.price}>$227</td>
              <td>Скумбрія</td>
              <td className={css.price}>$188</td>
              <td>Іржавий пістолет</td>
              <td className={css.price}>$1220</td>
            </tr>
            <tr>
              <td>Золото:</td>
              <td className={css.price}>$910</td>
              <td>Кефаль</td>
              <td className={css.price}>$197</td>
              <td>Ланцюг</td>
              <td className={css.price}>$3350</td>
            </tr>
            <tr>
              <td>Алмаз:</td>
              <td className={css.price}>$18200</td>
              <td>Горбуша</td>
              <td className={css.price}>$215</td>
              <td>Годинник</td>
              <td className={css.price}>$3535</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Тріска</td>
              <td className={css.price}>$179</td>
              <td>Монета</td>
              <td className={css.price}>$2230</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Тунець</td>
              <td className={css.price}>$125</td>
              <td>Пивна пробка</td>
              <td className={css.price}>$435</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Сібас</td>
              <td className={css.price}>$224</td>
              <td>Цвях</td>
              <td className={css.price}>$433</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Дорадо</td>
              <td className={css.price}>$233</td>
              <td>Залізна каска</td>
              <td className={css.price}>$1755</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Форель</td>
              <td className={css.price}>$215</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Камбала</td>
              <td className={css.price}>$242</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Скат</td>
              <td className={css.price}>$287</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Акула</td>
              <td className={css.price}>$305</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Фугу</td>
              <td className={css.price}>$449</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

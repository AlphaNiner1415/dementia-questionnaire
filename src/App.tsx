/** @jsx jsx */
import { jsx } from "@emotion/core";
import isEqual from "lodash.isequal";
import React, { useEffect, useState } from "react";
import "./App.css";
import Question from "./components/Question";
import Result from "./components/Result";
import ThemeProvider, { ThemeObject } from "./components/ThemeProvider";

const __QUESTIONS = [
  "หาของใช้ในบ้านไม่พบ",
  "จำสถานที่ที่เคยไปบ่อย ๆ ไม่ได้",
  "ต้องกลับไปทบทวนงานที่แม้จะตั้งใจทำซ้ำถึง 2 ครั้ง",
  "ลืมของที่ตั้งใจว่าจะนำเอาออกไปนอกบ้านด้วย",
  "ลืมเรื่องที่ได้รับฟังมาเมื่อวานนี้หรือเมื่อ 2-3 วันก่อน",
  "ลืมเพื่อนสนิทหรือญาติสนิทหรือบุคคลที่คบหากันบ่อย ๆ",
  "ไม่สามารถเข้าใจเนื้อเรื่องในหนังสือพิมพ์หรือวารสารที่อ่าน",
  "ลืมบอกข้อความที่คนอื่นวานให้บอกอีกคนหนึ่ง",
  "ลืมข้อมวลส่วนตัวของตัวเอง เช่น วันเกิด ที่อยู่",
  "สับสนในรายละเอียดของเรื่องที่ได้รับฟังมา",
  "ลืมที่ที่เคยวางสิ่งของนั้นเป็นประจำหรือมองหาสิ่งของนั้นในที่ที่ไม่น่าจะวางไว้",
  "ขณะเดินทางหรือเดินเล่นหรืออยู่ในอาคารที่เคยไปบ่อย ๆ มักเกิดเหตุการณ์หลงทิศหรือหลงทาง",
  "ต้องทำกิจวัตรประจำวันบางอย่างซ้ำถึง 2 ครั้ง เพราะมีความผิดพลาดเกิดขึ้น เช่น ใส่น้ำตาลมากเกินไปในเวลาปรุงอาหาร หรือ เดินไปหวีผมซ้ำอีกครั้ง ซึ่งเมื่อสักครู่เพิ่งได้หวีผมเสร็จ"
];

const QUESTIONS = __QUESTIONS.map((value: string, index: number) => ({
  order: index + 1,
  question: value
}));

const App: React.FC = () => {
  const [formState, setState] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    const questionKeys = Array.from(Array(QUESTIONS.length).keys()).map(
      x => ++x
    );

    const formStateKeys = Object.keys(formState).map(v => parseInt(v));
    const formStateValues: Array<string> = Object.values(formState);

    if (isEqual(questionKeys, formStateKeys)) {
      // Calculate
      const freqScore: Record<string, number> = { D: 4, W: 3, M: 2, Y: 1 };
      const totalScore = formStateValues
        .map(v => freqScore[v])
        .reduce((acc, current) => acc + current, 0);
      if (totalScore <= 19) {
        setResult("ดีมาก");
      } else if (totalScore <= 29) {
        setResult("ปานกลาง ควรได้รับคำแนะนำ เพื่อปรับปรุงความจำให้ดีขึ้น");
      } else if (totalScore <= 39) {
        setResult(
          "ค่อนข้างต่ำ เนื่องจากท่านมีภารกิจค่อนข้างมาก ทำให้ชีวิตท่านค่อนข้างยุ่ง ควรต้องได้รับคำแนะนำเพื่อปรับปรุงความจำให้ดีขึ้น"
        );
      } else if (totalScore <= 56) {
        setResult("ต่ำ ควรไปพบแพทย์");
      }
    }
  }, [formState]);

  return (
    <ThemeProvider>
      <div
        css={(t: ThemeObject) => ({
          paddingTop: t.spaces[6],
          paddingBottom: t.spaces[5],
          marginBottom: t.spaces[5],
          background: t.colors.primary
        })}
      >
        <div css={{ maxWidth: "800px", margin: "0 auto" }}>
          <h1
            css={(t: ThemeObject) => ({
              fontSize: "1.5rem",
              color: "white",
              fontWeight: 600,
              margin: `0 ${t.spaces[4]}px`
            })}
          >
            แบบประเมินตนเองสำหรับประชาชน
          </h1>
          <p
            css={(t: ThemeObject) => ({
              margin: `0 ${t.spaces[4]}px`,
              marginTop: t.spaces[1],
              color: "white",
              fontSize: "0.8rem",
              opacity: 0.75
            })}
          >
            ที่มา : สถาบันประสาทวิทยา กรมการแพทย์​กระทรวงสาธารณสุข
            แนวทางการรักษาภาวะสมองเสื่อม 2546. หน้า 57
          </p>
        </div>
      </div>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <div
          css={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {QUESTIONS.map(q => {
            return (
              <Question
                item={q}
                onChange={(v: any) =>
                  setState({ ...formState, [v.order]: v.value })
                }
                key={q.order}
              />
            );
          })}
          {result && <Result text={result} />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

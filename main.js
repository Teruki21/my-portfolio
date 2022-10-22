const mainButton = document.getElementById("mainbutton");
const qBox = document.getElementById("qBox");
const body = document.getElementById("body");
let hyouzi = false;
let inqbox = "InqBox"; // 詳細のClass一括管理
let title = "NameTag"; //題のClass管理
let mouse = false;

const data = {
  Name: "佐野光希",
  University: "東北大学",
  hobby: ["ドラム", "アニメ"],
  birthday: "2001年 5月13日",
  from: "千葉県",
  skill: "早起き",
};

mainButton.onclick = function () {
  if (hyouzi === false) {
    hyouzi = true;

    //左側を作る
    const LeftQBox = document.createElement("div");
    LeftQBox.classList.add("LeftQBox");
    createName(LeftQBox);
    createUniName(LeftQBox);
    createHobbyName(LeftQBox);

    qBox.append(LeftQBox);

    //右側を作る
    const RightQBox = document.createElement("div");
    RightQBox.classList.add("RightQBox");
    createBirthName(RightQBox);
    createFromName(RightQBox);
    createSkillName(RightQBox);

    qBox.append(RightQBox);

    // qBox.classList.add("RightQBox");

    // const motion = document.createElement("div");
    // motion.classList.add("BoxMotion");
    // qBox.append(motion);
    // hyouzi = true;
  }
};

// 名前の項目を作りelementに追加する
const createName = function (element) {
  const NameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (NameTop)
  const NameTop = document.createElement("div");
  NameTop.classList.add(title);
  NameTop.textContent = "名前";
  NameSpace.append(NameTop);

  //名前の表示
  const Name = document.createElement("button");
  Name.classList.add(inqbox);
  Name.textContent = data.Name;
  Name.id = "Teruki";
  NameSpace.append(Name);

  // Name.onmouseover = function () {
  //   const Furigana = document.createElement("div");
  //   Furigana.classList.add("furi");
  //   Furigana.id = "Furi";
  //   Furigana.textContent = "てるき";
  //   NameTop.append(Furigana);
  // };
  // Name.onmouseout = function () {
  //   const DFuri = document.getElementById("Furi");
  //   DFuri.remove;
  //   console.log("A");
  // };

  //因数に要素を追加
  element.append(NameSpace);
};

// 大学の項目を作りelementに追加する
const createUniName = function (element) {
  const UniNameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (UniNameTop)
  const UniNameTop = document.createElement("div");
  UniNameTop.classList.add(title);
  UniNameTop.textContent = "大学";
  UniNameSpace.append(UniNameTop);

  //大学名の表示
  const UniName = document.createElement("div");
  UniName.classList.add(inqbox);
  UniName.textContent = data.University;
  UniNameSpace.append(UniName);

  //因数に要素を追加
  element.append(UniNameSpace);
};

// 趣味の項目を作りelementに追加する
const createHobbyName = function (element) {
  const HobbyNameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (UniNameTop)
  const HobbyNameTop = document.createElement("div");
  HobbyNameTop.classList.add(title);
  HobbyNameTop.textContent = "趣味";
  HobbyNameSpace.append(HobbyNameTop);

  //趣味の内容の表示
  const HobbyName = document.createElement("div");
  HobbyName.classList.add(inqbox);
  HobbyName.textContent = data.hobby;

  HobbyNameSpace.append(HobbyName);

  //因数に要素を追加
  element.append(HobbyNameSpace);
};

// 誕生日の項目を作りelementに追加する
const createBirthName = function (element) {
  const BirthNameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (BirthNameTop)
  const BirthNameTop = document.createElement("div");
  BirthNameTop.classList.add(title);
  BirthNameTop.textContent = "誕生日";
  BirthNameSpace.append(BirthNameTop);

  //誕生日の表示
  const BirthName = document.createElement("div");
  BirthName.classList.add(inqbox);
  BirthName.textContent = data.birthday;
  BirthNameSpace.append(BirthName);

  //因数に要素を追加
  element.append(BirthNameSpace);
};

// 出身地の項目を作りelementに追加する
const createFromName = function (element) {
  const FromNameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (BirthNameTop)
  const FromNameTop = document.createElement("div");
  FromNameTop.classList.add(title);
  FromNameTop.textContent = "出身地";
  FromNameSpace.append(FromNameTop);

  //出身地の表示
  const FromName = document.createElement("div");
  FromName.classList.add(inqbox);
  FromName.textContent = data.from;
  FromNameSpace.append(FromName);

  //因数に要素を追加
  element.append(FromNameSpace);
};

// 特技の項目を作りelementに追加する
const createSkillName = function (element) {
  const SkillNameSpace = document.createElement("div");
  // NameSpace.classList.add(inqbox);

  // ”名前”の蘭の作成 (BirthNameTop)
  const SkillNameTop = document.createElement("div");
  SkillNameTop.classList.add(title);
  SkillNameTop.textContent = "特技";
  SkillNameSpace.append(SkillNameTop);

  //特技の表示
  const SkillName = document.createElement("div");
  SkillName.classList.add(inqbox);
  SkillName.textContent = data.skill;
  SkillNameSpace.append(SkillName);

  //因数に要素を追加
  element.append(SkillNameSpace);
};

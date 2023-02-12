import React, { useEffect, useState } from "react";
import { getStudentByIdShk } from "../service/StudentService";
import { addRegisterForm } from "../service/RegisterFormService";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [chooseStudent, setChooseStudent] = useState();
  const [maGiayKhaiSinh, setMaGiayKhaiSinh] = useState("");
  const [price, setPrice] = useState("");
  const [certImage, setCertImage] = useState("");
  useEffect(() => {
    const idShk = JSON.parse(localStorage.getItem("family")).idSoHoKhau;
    getStudentByIdShk(idShk).then((res) => {
      setStudents(res.data);
    });
  }, []);

  function handleSelectStudent(e) {
    const foundStudent = students.find(
      (student) => student.maGiayKhaiSinh === e.target.value
    );
    setMaGiayKhaiSinh(e.target.value);
    setChooseStudent(foundStudent);
  }

  async function handleSubmit() {
    addRegisterForm({
      anhMinhChung: certImage,
      giaiThuong: price,
      danhHieu: null,
      email: null,
      canBo: null,
      trangThai: "Đang chờ",
      hocSinh: {
        maGiayKhaiSinh,
      },
    }).then(() => {
      alert(`Đăng kí nhận thưởng thành công`);
      navigate("/");
    });
  }
  return (
    <div className="mx-12 my-3 flex flex-col items-center w-2/3 py-5">
      <div className="text-3xl mb-5">
        Đăng kí nhận thưởng học sinh giỏi năm học 2022-2023
      </div>
      <div class="w-full max-w-lg">
        <div className="flex flex-col gap-5">
          <div class="w-full px-3">
            <label
              for="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Mã giâý khai sinh học sinh đăng kí nhận thưởng
            </label>
            <select
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={maGiayKhaiSinh}
              onChange={handleSelectStudent}
            >
              <option selected value="">
                Chọn mã giấy khai sinh (là học sinh)
              </option>
              {students.map((student, index) => (
                <option
                  value={student.maGiayKhaiSinh}
                  key={student.maGiayKhaiSinh}
                >
                  {student.maGiayKhaiSinh}
                </option>
              ))}
            </select>
          </div>

          {!chooseStudent ? (
            <div></div>
          ) : (
            <>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="full-name"
                >
                  Họ và tên
                </label>
                <input
                  type="text"
                  id="full-name"
                  aria-label="disabled input 2"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  disabled
                  readonly
                  value={chooseStudent.thanhVien.ten}
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="school"
                >
                  Trường
                </label>
                <input
                  type="text"
                  id="school"
                  aria-label="disabled input 2"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={chooseStudent.truong}
                  disabled
                  readonly
                />
              </div>
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="school"
                >
                  Lớp
                </label>
                <input
                  type="text"
                  id="school"
                  aria-label="disabled input 2"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={chooseStudent.lop}
                  disabled
                  readonly
                />
              </div>
            </>
          )}
          <div class="w-full px-3">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Giải thưởng
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="w-full px-3">
            <label
              for="default-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ảnh minh chứng
            </label>
            <input
              type="text"
              id="default-input"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={certImage}
              onChange={(e) => setCertImage(e.target.value)}
            />
            <img
              src={certImage}
              alt="Preview certificate"
              className="text-md text-blue-600 mt-3"
            />
          </div>
          <div className="w-full px-3">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
              type="submit"
            >
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

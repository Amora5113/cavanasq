import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../Assets/Logos/mpigris.png";

export default function Pagei() {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const phoneNumber = "526161070699";

    const text = `
*Tengo una duda acerca del proyecto CAVANA*

• Nombre: ${formData.nombre}

• Email: ${formData.email}

• Teléfono: ${formData.telefono}

• Mensaje:
${formData.mensaje}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-blue-950 text-white py-16 px-6 md:px-14">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <img
              src={logo}
              alt="Cavana"
              className="w-160"
            />

            <p className="text-[16px] leading-loose text-gray-200 max-w-100 text-justify">
              Proyecto privado diseñado para empresas que
              buscan espacios industriales modernos y
              funcionales.
            </p>

            <p className="text-[16px] leading-loose text-gray-200 mt-4 max-w-100">
              Solo 4 bodegas disponibles en etapa de
              lanzamiento.
            </p>
          </div>

          {/* CENTER */}
          <div className="border-y-0 lg:border-x border-white/20 px-0 lg:px-10">
            <h2 className="text-3xl font-semibold mb-2">
              ¿Alguna pregunta?
            </h2>

            <p className="uppercase text-sm font-semibold text-gray-300 mb-4">
              Envíanos un mensaje para aclarar tu duda
            </p>

            <form
              onSubmit={sendWhatsApp}
              className="flex flex-col gap-4"
            >

              {/* NOMBRE */}
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                className="w-full h-13 px-4 rounded-md bg-gray-300 text-blue-950 outline-none"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full h-13 px-4 rounded-md bg-gray-300 text-blue-950 outline-none"
                />

                {/* TELEFONO */}
                <input
                  type="text"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="Teléfono"
                  className="w-full h-13 px-4 rounded-md bg-gray-300 text-blue-950 outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">

                {/* MENSAJE */}
                <textarea
                  rows="4"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu duda *"
                  className="w-full px-8 py-4 rounded-md bg-gray-300 text-blue-950 outline-none resize-none"
                ></textarea>

                {/* BOTON */}
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-300 transition-all duration-300 px-4 py-4 rounded-md font-semibold flex items-center justify-center gap-2 h-fit"
                >
                  <i className="bi bi-send-fill"></i>
                  Enviar
                </button>

              </div>
            </form>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-10">
              Contacto
            </h2>

            <div className="flex flex-col gap-10">

              {/* DIRECCION */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <i className="bi bi-house-door-fill text-xl"></i>
                </div>

                <div>
                  <h3 className="uppercase font-semibold text-sm mb-2">
                    Dirección:
                  </h3>

                  <p className="text-gray-200 leading-7">
                    Carretera Transpeninsular 22920,
                    <br />
                    San Quintín, Baja California
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <i className="bi bi-envelope-fill text-xl"></i>
                </div>

                <div>
                  <h3 className="uppercase font-semibold text-sm mb-2">
                    Email:
                  </h3>

                  <a
                    className="text-white"
                    href="mailto:jmendez@sanquintinm2.com"
                  >
                    jmendez@sanquintinm2.com
                  </a>
                </div>
              </div>

              {/* TELEFONO */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center">
                  <i className="bi bi-telephone-fill text-xl"></i>
                </div>

                <div>
                  <h3 className="uppercase font-semibold text-sm mb-2">
                    Teléfono
                  </h3>

                  <p className="text-gray-200">
                    +52 616 107 0699
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

export const dynamic = "force-dynamic";
// export const revalidate = 0;

import { useEffect, useState, ChangeEvent } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouter, useSearchParams } from "next/navigation"

import type { RootState, AppDispatch } from "@/store"
import { fetchStartups, updateStartup } from "@/store/slices/startupSlice"

/* ---------- Form Row ---------- */
function FormRow({
  label,
  children,
  required = false,
}: {
  label: string
  children: React.ReactNode
  required?: boolean
}) {
  return (
    <div className="flex flex-col space-y-1.5">
      <label className="text-sm font-semibold text-slate-700">
        {label}: {required && <span className="text-red-500">*</span>}
      </label>
      <div className="w-full">{children}</div>
    </div>
  )
}

export default function UpdateStartupPage() {
  const dispatch = useDispatch<AppDispatch>()
  const router = useRouter()
  const params = useSearchParams()

  const startupId =
    typeof window !== "undefined"
      ? params.get("startup_id")
      : null

  const startups =
    useSelector((state: RootState) => state.startup?.startups) || []

  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    slug: "",
    description: "",
    stage: "PRESEEDSTAGE",
    incorporation_country: "",
    founded_year: "",
    website: "",
    is_bootstrap: false,
    equity: "",
    joined_at: "",
  })

  /* Load startups */
  useEffect(() => {
    dispatch(fetchStartups())
  }, [dispatch])

  /* Prefill form */
  useEffect(() => {
    if (!startupId || !startups.length) return

    const entry = startups.find((s) => s.startup.id == startupId)

    if (entry) {
      setForm({
        name: entry.startup.name || "",
        slug: entry.startup.slug || "",
        description: entry.startup.description || "",
        stage: entry.startup.stage || "PRESEEDSTAGE",
        incorporation_country:
          entry.startup.incorporation_country || "",
        founded_year:
          entry.startup.founded_year?.split("T")[0] || "",
        website: entry.startup.website || "",
        is_bootstrap: entry.startup.is_bootstrap || false,
        equity: entry.role.equity?.toString() || "",
        joined_at:
          entry.role.joined_at?.split("T")[0] || "",
      })
    }
  }, [startups, startupId])

  /* Input change */
  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target

    const finalValue =
      type === "checkbox"
        ? (e.target as HTMLInputElement).checked
        : value

    setForm((prev) => ({
      ...prev,
      [name]: finalValue,
    }))
  }

  /* Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const payload = {
      startup: {
        name: form.name,
        slug: form.slug,
        description: form.description,
        stage: form.stage,
        incorporation_country: form.incorporation_country,
        founded_year: form.founded_year,
        website: form.website,
        is_bootstrap: form.is_bootstrap,
      },
      role: {
        title: "FOUNDER",
        equity: Number(form.equity),
        joined_at: form.joined_at,
        is_primary_contact: true,
      },
    }

    try {
      await dispatch(
        updateStartup({ startup_id: startupId, payload })
      ).unwrap()

      router.replace("/dashboard")
    } catch (err) {
      console.error("Update failed", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Update Startup
          </h1>
          <p className="mt-2 text-slate-600">
            Edit your startup information.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow border rounded-xl overflow-hidden"
        >
          <div className="p-6 space-y-8">

            <section className="space-y-6">
              <h2 className="text-sm font-bold uppercase text-blue-600 border-b pb-2">
                Basic Info
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <FormRow label="Name" required>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>

                <FormRow label="Slug" required>
                  <input
                    required
                    name="slug"
                    value={form.slug}
                    onChange={handleChange}
                    className="input-field"
                  />
                </FormRow>
              </div>

              <FormRow label="Description">
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="input-field min-h-[100px]"
                />
              </FormRow>
            </section>

          </div>

          <div className="bg-slate-50 px-8 py-6 border-t flex justify-end gap-4">
            <button type="button" onClick={() => router.back()}>
              Cancel
            </button>

            <button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Update Startup"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}